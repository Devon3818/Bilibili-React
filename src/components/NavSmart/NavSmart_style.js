import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'NavSmart': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'rem', 'value': 1.2 }],
    'background': '#f25d8e',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(7, 17, 27, 0.1)' }],
    'display': 'flex',
    'alignItems': 'center',
    'position': 'sticky',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '999'
  },
  'NavSmart span': {
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
  'NavSmart left-0': {
    'left': [{ 'unit': '%H', 'value': 0.03 }]
  },
  'NavSmart left-1': {
    'left': [{ 'unit': '%H', 'value': 0.23 }]
  },
  'NavSmart left-2': {
    'left': [{ 'unit': '%H', 'value': 0.43 }]
  },
  'NavSmart left-3': {
    'left': [{ 'unit': '%H', 'value': 0.63 }]
  },
  'NavSmart left-4': {
    'left': [{ 'unit': '%H', 'value': 0.83 }]
  },
  'NavSmart nav-tab': {
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'rem', 'value': 0.3 }],
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 0.2 }]
  },
  'NavSmart nav-tab a': {
    'color': '#fff'
  }
});
