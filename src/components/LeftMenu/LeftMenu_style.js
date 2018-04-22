import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'LeftMenu': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'background': 'rgba(0, 0, 0, 0.3)',
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '999'
  },
  'LeftMenu ulMenu active li': {
    'background': '#e4e4e4',
    'color': '#f25d8e'
  },
  'LeftMenu ulMenu active li i': {
    'color': '#f25d8e'
  },
  'LeftMenu flex-nav': {
    'position': 'absolute',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'display': 'flex',
    'fontSize': [{ 'unit': 'rem', 'value': 0.3 }],
    'height': [{ 'unit': 'rem', 'value': 1.5 }],
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#f1f1f1' }]
  },
  'LeftMenu flex-nav p': {
    'flex': '1',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center'
  },
  'LeftMenu flex-nav i': {
    'display': 'inline-block',
    'width': [{ 'unit': 'rem', 'value': 0.8 }],
    'height': [{ 'unit': 'rem', 'value': 0.8 }],
    'textAlign': 'center',
    'lineHeight': [{ 'unit': 'rem', 'value': 0.8 }],
    'color': '#999',
    'marginRight': [{ 'unit': 'rem', 'value': 0.1 }],
    'borderRadius': '100%',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#999' }]
  },
  'LeftMenu content': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 0.75 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'background': '#fff'
  },
  'LeftMenu user-info': {
    'overflow': 'hidden',
    'padding': [{ 'unit': 'rem', 'value': 0.6 }, { 'unit': 'rem', 'value': 0.6 }, { 'unit': 'rem', 'value': 0.6 }, { 'unit': 'rem', 'value': 0.6 }],
    'color': '#fff',
    'background': '#f25d8e',
    'position': 'relative'
  },
  'LeftMenu user-info BILIBILI': {
    'position': 'absolute',
    'bottom': [{ 'unit': 'rem', 'value': -1.5 }],
    'right': [{ 'unit': 'rem', 'value': -1.2 }],
    'fontSize': [{ 'unit': 'rem', 'value': 5 }],
    'color': '#f57ba5'
  },
  'LeftMenu user-info icon': {
    'position': 'absolute',
    'top': [{ 'unit': 'rem', 'value': 0.6 }],
    'right': [{ 'unit': 'rem', 'value': 0 }],
    'display': 'flex'
  },
  'LeftMenu user-info icon i': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.6 }],
    'marginRight': [{ 'unit': 'rem', 'value': 0.3 }],
    'width': [{ 'unit': 'rem', 'value': 1 }],
    'height': [{ 'unit': 'rem', 'value': 1 }],
    'lineHeight': [{ 'unit': 'rem', 'value': 1 }],
    'textAlign': 'center',
    'borderRadius': '100%',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }]
  },
  'LeftMenu user-info uhead': {
    'display': 'block',
    'width': [{ 'unit': 'rem', 'value': 2 }],
    'height': [{ 'unit': 'rem', 'value': 2 }],
    'borderRadius': '100%',
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }],
    'marginBottom': [{ 'unit': 'rem', 'value': 0.1 }]
  },
  'LeftMenu user-info uname': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.5 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 0.2 }]
  },
  'LeftMenu user-info ubi': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.4 }],
    'color': '#f9f9f9'
  },
  'LeftMenu user-info ubi span': {
    'paddingRight': [{ 'unit': 'rem', 'value': 0.2 }]
  },
  'LeftMenu ulMenu li': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'lineHeight': [{ 'unit': 'rem', 'value': 1.5 }],
    'color': '#999'
  },
  'LeftMenu ulMenu li i': {
    'marginRight': [{ 'unit': 'rem', 'value': 0.4 }]
  },
  'example-enter': {
    'opacity': '0'
  },
  'example-enter content': {
    'transform': 'translate3d(-100%, 0, 0)'
  },
  'example-enterexample-enter-active': {
    'opacity': '1',
    'transition': 'all 300ms ease'
  },
  'example-enterexample-enter-active content': {
    'transform': 'translate3d(0, 0, 0)',
    'transition': 'all 300ms ease'
  },
  'example-leave': {
    'opacity': '1'
  },
  'example-leave content': {
    'transform': 'translate3d(0, 0, 0)'
  },
  'example-leaveexample-leave-active': {
    'opacity': '0',
    'transition': 'all 300ms ease'
  },
  'example-leaveexample-leave-active content': {
    'transform': 'translate3d(-100%, 0, 0)',
    'transition': 'all 300ms ease'
  }
});
