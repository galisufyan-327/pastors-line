import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import CustomTable from "../CustomTable";
import { contactListHeader } from "../../constants";
import { Form, InputGroup } from "react-bootstrap";
import debounce from "lodash.debounce";

function ContactList({ items, setSelectedContact, fetchMoreData }) {
  const [query, setQuery] = useState("");

  const doContactsFilter = useCallback(
    debounce((query) => {
      if (!query) return "";

    }, 500),
    []
  );

  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search by name"
          aria-label="Search by name"
          aria-describedby="search"
          value={query}
          onKeyDown={({ target }) => {
            // api call
            console.log(target.value);
          }}
          onChange={({ target }) => {
            setQuery(target.value);
            doContactsFilter(target.value);
          }}
        />
      </InputGroup>
      <CustomTable
        headers={contactListHeader}
        data={Object.keys(items).map((key) => items[key])}
        setSelectedContact={setSelectedContact}
        fetchMoreData={fetchMoreData}
      />
    </>
  );
}

ContactList.propTypes = {
  setSelectedContact: PropTypes.func,
  items: PropTypes.object,
  fetchMoreData: PropTypes.func,
};

export default ContactList;
