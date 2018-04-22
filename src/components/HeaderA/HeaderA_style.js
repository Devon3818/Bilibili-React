import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'HeaderA': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'rem', 'value': 1.5 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.6 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.6 }],
    'overflow': 'hidden',
    'background': '#f25d8e',
    'position': 'relative'
  },
  'HeaderA menu': {
    'lineHeight': [{ 'unit': 'rem', 'value': 1.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1 }],
    'color': '#fff'
  },
  'HeaderA title': {
    'color': '#fff',
    'fontSize': [{ 'unit': 'rem', 'value': 0.5 }],
    'lineHeight': [{ 'unit': 'rem', 'value': 1.5 }],
    'marginLeft': [{ 'unit': 'rem', 'value': 0.4 }]
  }
});
