import React, { Component } from 'react';

import AsyncSelect from 'react-select/async';

import API from '../../utils/API';

function promiseOptions (inputValue: any) {
  new Promise(resolve => {
    API.post('/user/find', {search_query: inputValue})
    .then(res => {
        const options: any[] = [];
        res.data.users.forEach((user: any) => {
            options.push({
                value: user,
                label: user.username
            })
        })
        resolve(options);
    })
    .catch(err => resolve)
  });
}

export default class UserSearch extends Component {
  render() {
    return (
      <AsyncSelect cacheOptions defaultOptions loadOptions={promiseOptions} />
    );
  }
}