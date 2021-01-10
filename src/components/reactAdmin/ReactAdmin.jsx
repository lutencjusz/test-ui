import React, { cloneElement } from 'react';
import {
  Admin,
  Resource,
  List,
  Datagrid,
  TextField,
  downloadCSV,
} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import {
  useListContext,
  TopToolbar,
  CreateButton,
  ExportButton,
  Button,
  sanitizeListRestProps,
} from 'react-admin';
import IconEvent from '@material-ui/icons/Event';
import jsonExport from 'jsonexport/dist';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

export default function ReactAdmin() {
  const exporter = (posts) => {
    const postsForExport = posts.map((post) => {
      const { ...postForExport } = post; // omit backlinks and author
      postForExport.author_name = post.author.name; // add a field
      console.log({ postForExport });
      return postForExport;
    });
    jsonExport(
      postsForExport,
      {
        headers: ['id', 'title', 'author_name', 'body'], // order fields in the export
      },
      (err, csv) => {
        downloadCSV(csv, 'exportPosts'); // download as 'posts.csv` file
      }
    );
  };

  const ListActions = (props) => {
    const { className, filters, maxResults, ...rest } = props;
    const {
      currentSort,
      resource,
      displayedFilters,
      filterValues,
      basePath,
      showFilter,
      total,
    } = useListContext();
    return (
      <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
        {filters &&
          cloneElement(filters, {
            resource,
            showFilter,
            displayedFilters,
            filterValues,
            context: 'button',
          })}
        <CreateButton basePath={basePath} />
        <ExportButton
          disabled={total === 0}
          resource={resource}
          sort={currentSort}
          filterValues={filterValues}
          maxResults={maxResults}
        />
        {/* Add your custom actions */}
        <Button
          onClick={() => {
            alert('Your custom action');
          }}
          label="Show calendar"
        >
          <IconEvent />
        </Button>
      </TopToolbar>
    );
  };

  const postList = (props) => (
    <List {...props} actions={<ListActions />}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="body" />
        <TextField source="userId" />
      </Datagrid>
    </List>
  );
  return (
    <div className="frame">
      <h1>react-admin</h1>
      <br />
      <Admin dataProvider={dataProvider}>
        <Resource name="posts" list={postList} exporter={exporter} />
      </Admin>
    </div>
  );
}
