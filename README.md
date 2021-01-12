# React Event Listeners

(This package isn't only restricted to react-js projects. The source is written in plain js with no dependencies to react-js.)

[![npm version](https://badge.fury.io/js/react-events-listeners.svg)](https://badge.fury.io/js/react-events-listeners)
[![dependencie status](https://david-dm.org/tobiasMeinhardt/react-events-listeners.svg)](https://david-dm.org/tobiasMeinhardt/react-events-listeners)
[![dev-dependency status](https://david-dm.org/tobiasMeinhardt/react-events-listeners/dev-status.svg)](https://david-dm.org/tobiasMeinhardt/react-events-listeners?type=dev)
[![npm](https://img.shields.io/npm/dm/react-events-listeners.svg)](https://www.npmjs.com/package/react-events-listeners)
[![npm](https://img.shields.io/npm/dt/react-events-listeners.svg)](https://www.npmjs.com/package/react-events-listeners)
[![travis build](https://travis-ci.org/meinto/react-events-listeners.svg?branch=master)](https://travis-ci.org/meinto/react-events-listeners)
[![Coverage Status](https://coveralls.io/repos/github/meinto/react-events-listeners/badge.svg?branch=master)](https://coveralls.io/github/meinto/react-events-listeners?branch=master)

## Why

In some very specific cases it can be charming to have a simple global event listener. While working with global event listeners **you don't have to pass touch events through the component tree** into other components or can **bypass easily the redux architecture** for example.

## Installation

```
npm install --save react-events-listeners
```

or

```
yarn add react-events-listeners
```

## Usage Example

*Hint: The event listeners also work across different files. You only have to import the ```EventRegister``` in every file you need to send or receive your events.*

```javascript
import { EventRegister } from 'react-events-listeners'

/*
 * RECEIVER COMPONENT
 */
class Receiver extends PureComponent {
    constructor(props) {
        super(props)
        
        this.state = {
            data: 'no data',
        }
    }
    
    componentWillMount() {
        this.listener = EventRegister.addEventListener('myCustomEvent', (data) => {
            this.setState({
                data,
            })
        })
    }
    
    componentWillUnmount() {
        EventRegister.removeEventListener(this.listener)
    }
    
    render() {
        return <Text>{this.state.data}</Text>
    }
}

/*
 * SENDER COMPONENT
 */
const Sender = (props) => (
    <TouchableHighlight
        onPress={() => {
            EventRegister.emit('myCustomEvent', 'it works!!!')
        })
    ><Text>Send Event</Text></TouchableHighlight>
)
```

## API

```javascript
// import
import { EventRegister } from 'react-events-listeners'
```

| static method       | return value      | description                                                    |
| :------------------ | :---------------- | :------------------------------------------------------------- |
| addEventListener    | string \| boolean | return value is the id of the event listener or false on error |
| removeEventListener | boolean           | true on success otherwise false                                |
| removeAllListeners  | boolean           | true on success otherwise false                                |
| emitEvent           | void              | no return value                                                |
| on                  | string \| boolean | **shorthand** for addEventListener                             |
| rm                  | boolean           | **shorthand** for removeEventListener                          |
| rmAll               | boolean           | **shorthand** for removeAllListeners                           |
| emit                | void              | **shorthand** for emitEvent                                    |

