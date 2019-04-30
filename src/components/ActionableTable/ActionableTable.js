import React from 'react';

import Button from '../Button';

const ActionableTable = ({
  onColumnAction,
  className = '',
  columnNames = [],
  style = {},
  values = [],
  actionMessage = 'visit'
}) => (
  <div style={style} className={`action-table ${className}`}>
    <div className={'action-table-header'}>
      {
          columnNames.map((columnName, index) => {
            return (
              <div key={index} className="table-cell">
                {columnName}
              </div>
            );
          })
        }
    </div>
    <div className={'action-table-main'}>
      {
            values.map((obj, rowIndex) => {
              return (
                <div key={rowIndex} className="table-row">
                  {
                  columnNames.map((columnName, index) => {
                    return (
                      <div key={index} className="table-cell">
                        {obj[columnName]}
                      </div>
                    );
                  })
                }
                </div>
              );
            })
          }

    </div>
    <div className={'action-table-footer'}>
      {
          columnNames.map((columnName, index) => {
            const handleClick = e => {
              if (typeof onColumnAction === 'function') {
                onColumnAction(columnName, e);
              }
            };
            return (
              <div key={index} className="table-cell">
                <Button onClick={handleClick} isColor="primary" isFullwidth>
                  {actionMessage}
                </Button>
              </div>
            );
          })
        }
    </div>
  </div>
);
export default ActionableTable;
