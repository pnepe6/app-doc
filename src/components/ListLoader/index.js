import React from 'react';
import { Table, Column, InfiniteLoader } from 'react-virtualized';
import componentList from './componentList';

const rows = [];
const preLoadedRowCount = componentList.length;
const fakeRemoteCount = componentList.length;

for (let i = 0; i < preLoadedRowCount; i += 1) {
  rows.push({ components: componentList[i] });
}

const isRowLoaded = ({ index }) => !!rows[index];

const loadMoreRows = ({ stopIndex }) => {
  const numberToLoad = (stopIndex - rows.length) + 1;
  let promise = null;
  if (numberToLoad > 0) {
    setTimeout(() => {
      for (let i = rows.length; i < stopIndex; i += 1) {
        rows.push({ components: () => componentList[stopIndex] }); // Push to the row array
      }
      promiseResolver();
    }, 1000 + Math.round(Math.random() * 3000)); // Simulate the data fetching


    let promiseResolver;

    promise = new Promise((resolve) => {
      promiseResolver = resolve;
    });
  }
  return promise;
}


const rowRenderer = ({ key, style, rowData }) => {
  let content;
  if (rowData) {
    return (
      <div
        className="Row"
        key={key}
        style={{
          ...style,
          display: 'flex',
          flexDirection: 'row',
          whiteSpace: 'pre',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        <span style={{ width: 400 }}>
          {rowData.components}
        </span>
      </div>);
  } return (
    <div
      className="Row"
      key={key}
      style={{
        ...style,
        display: 'flex',
        flexDirection: 'row',
        whiteSpace: 'pre',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
    >
      loading
    </div>);
}

const cellDataGetter = ({
  dataKey,
  rowData,
}) => {
  if (rowData) {
    if (typeof rowData.get === 'function') {
      return rowData.get(dataKey);
    } return rowData[dataKey];
  } return null;
}

const ListLoader = () => (
  <InfiniteLoader
    isRowLoaded={isRowLoaded}
    rowCount={fakeRemoteCount}
    loadMoreRows={loadMoreRows}
  >
    {({ onRowsRendered, registerChild }) => (
      <Table
        width={500}
        height={300}
        onRowsRendered={onRowsRendered}
        ref={registerChild}
        rowGetter={({ index }) => rows[index]}
        rowCount={fakeRemoteCount}
        rowHeight={40}
        rowRenderer={rowRenderer}
        headerHeight={20}
      >
        <Column
          label="Components"
          dataKey="components"
          width={400}
          cellDataGetter={cellDataGetter}
        />
      </Table>
    )}
  </InfiniteLoader>
);


export default ListLoader;
