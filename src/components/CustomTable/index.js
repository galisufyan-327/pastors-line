import React from "react";
import { Table } from "react-bootstrap";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

function CustomTable({ headers, data, setSelectedContact, fetchMoreData }) {
  return (
    <div>
      <InfiniteScroll
        dataLength={data.length}
        next={() => {
          fetchMoreData();
        }}
        style={{ display: "flex", flexDirection: "column-reverse" }} //To put endMessage and loader to the top.
        inverse={true} //
        hasMore={true}
        // loader={<h4>Loading...</h4>}
        scrollableTarget="scrollableDiv"
      >
        <Table striped>
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((ele, index) => (
              <tr key={index}>
                <td
                  className="cursor-pointer link"
                  onClick={() => setSelectedContact(ele)}
                >
                  {ele.id}
                </td>
                <td>{ele.first_name || "-"}</td>
                <td>{ele.last_name || "-"}</td>
                <td>{ele.email || "-"}</td>
                <td>{ele.phone_number || "-"}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </InfiniteScroll>
    </div>
  );
}

CustomTable.propTypes = {
  headers: PropTypes.array,
  data: PropTypes.array,
  setSelectedContact: PropTypes.func,
  fetchMoreData: PropTypes.func,
};

export default CustomTable;
