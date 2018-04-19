import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'NavSmartMess': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'rem', 'value': 1.2 }],
    'background': '#f25d8e',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(7, 17, 27, 0.1)' }],
    'display': 'flex',
    'alignItems': 'center',
    'position': 'sticky',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '999'
  },
  'NavSmartMess span': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 0.14 }],
    'height': [{ 'unit': 'px', 'value': 3 }],
    'background': '#fff',
    'position': 'absolute',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': '%H', 'value': 0.03 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(7, 17, 27, 0.1)' }],
    'transition': 'all .2s ease-in'
  },
  'NavSmartMess left-0': {
    'left': [{ 'unit': '%H', 'value': 0.1 }]
  },
  'NavSmartMess left-1': {
    'left': [{ 'unit': '%H', 'value': 0.43 }]
  },
  'NavSmartMess left-2': {
    'left': [{ 'unit': '%H', 'value': 0.76 }]
  },
  'NavSmartMess nav-tab': {
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'rem', 'value': 0.3 }],
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 0.33299999999999996 }]
  },
  'NavSmartMess nav-tab a': {
    'color': '#fff'
  }
});
