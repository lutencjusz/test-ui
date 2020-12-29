import React, { useState, useEffect, Fragment } from 'react';
import StyledContentL from 'styled-content-loader';
import SkeletonLoader from 'tiny-skeleton-loader-react';
import { styles } from '../../constaints';

export default function StyledContentLoader() {
  const [loadingState, setLoadingState] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoadingState(false);
    }, 5000);
  });
  return (
    <div className="frame">
      <h1>styled-content-loader</h1>
      <br />
      <div style={styles.component}>
        <div style={styles.componentItem}>
          <StyledContentL isLoading={loadingState}>
            <h2>styled-content-loader</h2>
            <h4>To jest przykładowy tekst</h4>
            <p>wykonany za pomocą StyledContentLoader</p>
          </StyledContentL>
        </div>
        <div style={styles.componentItem}>
          {loadingState ? (
            <Fragment>
              <SkeletonLoader height="2rem" />
              <br />
              <SkeletonLoader height="1.5rem" />
              <br />
              <SkeletonLoader />
            </Fragment>
          ) : (
            <Fragment>
              <h3>tiny-skeleton-loader-react</h3>
              <h4>To jest przykładowy tekst</h4>
              <p>wykonany za pomocą SkeletonLoader</p>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
}
