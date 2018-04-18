import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'Footer': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'position': 'fixed',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'display': 'flex',
    'background': '#fff',
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'height': [{ 'unit': 'rem', 'value': 1.6 }]
  },
  'Footer a': {
    'display': 'flex',
    'flex': '1',
    'fontSize': [{ 'unit': 'rem', 'value': 0.3 }],
    'alignItems': 'center',
    'justifyContent': 'center',
    'flexDirection': 'column',
    'color': '#ababab'
  },
  'Footer a i': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.7 }]
  },
  'Footer active': {
    'color': '#f25d8e'
  }
});
