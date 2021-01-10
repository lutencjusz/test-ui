import React, { cloneElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import jsonServerProvider from 'ra-data-json-server';
import {
  Admin,
  Resource,
  List,
  Datagrid,
  TextField,
  downloadCSV,
  useListContext,
  TopToolbar,
  CreateButton,
  ExportButton,
  sanitizeListRestProps,
  Show,
  SimpleShowLayout,
  RichTextField,
  Create,
  Edit,
  SimpleForm,
  TextInput,
  required,
  Filter,
  EditButton,
  ShowButton,
  DeleteButton,
  AppBar,
  Layout,
} from 'react-admin';
import jsonExport from 'jsonexport/dist';
import RichTextInput from 'ra-input-rich-text';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const useStyles = makeStyles({
  label: {
    textAlign: 'left',
  },
});

export default function ReactAdmin(props) {
  const classes = useStyles();

  const exporter = (posts) => {
    const postsForExport = posts.map((post) => {
      const { ...postForExport } = post; // omit backlinks and author
      postForExport.author_name = post.author.name; // add a field
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
      </TopToolbar>
    );
  };

  const PostFilter = (props) => (
    <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn />
      <TextInput label="Title" source="title" defaultValue="Hello, World!" />
    </Filter>
  );

  const postShow = (props) => (
    <Show {...props}>
      <SimpleShowLayout className={classes.label}>
        <TextField source="id" />
        <TextField source="title" />
        <RichTextField source="body" />
      </SimpleShowLayout>
    </Show>
  );

  const postCreate = (props) => (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput source="teaser" options={{ multiLine: true }} />
        <RichTextInput source="body" />
      </SimpleForm>
    </Create>
  );

  const PostEdit = (props) => (
    <Edit {...props}>
      <SimpleForm className={classes.label}>
        <TextInput disabled label="Id" source="id" />
        <TextInput source="title" validate={required()} />
        <RichTextInput source="body" validate={required()} />
      </SimpleForm>
    </Edit>
  );

  const postList = (props) => (
    <List {...props} filters={<PostFilter />} actions={<ListActions />}>
      <Datagrid expand={<PostEdit />}>
        <TextField source="id" />
        <TextField source="title" />
        <EditButton />
        <ShowButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );

  const MyAppBar = (props) => <AppBar {...props} userMenu={false} />;

  const MyLayout = (props) => <Layout {...props} appBar={MyAppBar} />;

  return (
    <div className="frame">
      <h1>React-admin</h1>
      <br />
      <Admin theme={props.theme} dataProvider={dataProvider} layout={MyLayout}>
        <Resource
          name="posts"
          show={postShow}
          list={postList}
          exporter={exporter}
          create={postCreate}
          edit={PostEdit}
        />
      </Admin>
    </div>
  );
}
