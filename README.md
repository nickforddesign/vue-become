# vue-become

[![Build](https://travis-ci.org/nickforddesign/vue-become.svg?branch=master)](#)
[![Coverage Status](https://coveralls.io/repos/github/nickforddesign/vue-become/badge.svg?branch=master)](https://coveralls.io/github/nickforddesign/vue-become?branch=master)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> A modern fetch plugin for Vue.js with easy config config and hooks

## Installation

``` bash
npm install vue-become
```

## Setup

```js
import Vue from 'vue'
import VueBecome from 'vue-become'

Vue.use(VueBecome, options)
```

## Usage

```js
import Vue from 'vue'
export default {
  data() {
    return {
      active: false
    }
  }
  mounted() {
    setTimeout(() => {
      this.active = true
    }, 1000)

    this.$become('active', true)
      .then(() => {
        console.log('component is now active')
      })
  }
}
```

## Build Setup

``` bash
# install dependencies
npm install

# serve demo at localhost:8080
npm start

# run tests with jest
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).