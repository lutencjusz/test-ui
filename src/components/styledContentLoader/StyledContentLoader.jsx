import React, { useState, useEffect, Fragment } from 'react';
import StyledContentL from 'styled-content-loader';
import SkeletonLoader from 'tiny-skeleton-loader-react';
import { styles } from '../../constaints';
import BorderWrapper from 'react-border-wrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBraille } from '@fortawesome/free-solid-svg-icons';

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
      <h6>
        dodatkowo react-border-wrapper oraz dla porównania
        tiny-skeleton-loader-react <br /> ikonka przez
        @fortawesome/react-fontawesome oraz @fortawesome/free-solid-svg-icons
      </h6>
      <br />
      <div style={styles.component}>
        <div style={styles.componentItem}>
          <BorderWrapper
            borderColour="#5F9EA0"
            borderWidth="5px"
            borderRadius="10px"
            borderType="solid"
            innerPadding="30px"
            topElement={<FontAwesomeIcon icon={faBraille} size="3x" />}
            topPosition={0.05}
            topOffset="22px"
            topGap="4px"
            //rightElement={}
            rightPosition={0.1}
            rightOffset="22px"
            rightGap="4px"
          >
            <StyledContentL isLoading={loadingState}>
              <h5>styled-content-loader</h5>
              <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident voluptatem...
              </p>
            </StyledContentL>
          </BorderWrapper>
        </div>
        <div style={styles.componentItem}>
          <BorderWrapper
            borderColour="5F9EA0"
            borderWidth="5px"
            borderRadius="10px"
            borderType="solid"
            innerPadding="30px"
            topElement={<FontAwesomeIcon icon={faBraille} size="3x" />}
            topPosition={0.05}
            topOffset="22px"
            topGap="4px"
            // rightElement={}
            rightPosition={0.1}
            rightOffset="22px"
            rightGap="4px"
          >
            {loadingState ? (
              <Fragment>
                <SkeletonLoader height="2.5rem" width="30vw" />
                <br />
                <SkeletonLoader height="2rem" />
                <br />
                <SkeletonLoader height="1.5rem" />
              </Fragment>
            ) : (
              <Fragment>
                <h6>tiny-skeleton-loader-react</h6>
                <h6>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident voluptatem...
                </p>
              </Fragment>
            )}
          </BorderWrapper>
        </div>
      </div>
      <br />
    </div>
  );
}
