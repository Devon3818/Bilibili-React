import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'Cinephile': {
    'paddingBottom': [{ 'unit': 'rem', 'value': 3.5 }]
  },
  'Cinephile top': {
    'padding': [{ 'unit': 'rem', 'value': 0.3 }, { 'unit': 'rem', 'value': 0.3 }, { 'unit': 'rem', 'value': 0.3 }, { 'unit': 'rem', 'value': 0.3 }],
    'background': '#fff',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(7, 17, 27, 0.1)' }],
    'marginBottom': [{ 'unit': 'rem', 'value': 0.5 }]
  },
  'Cinephile top banner-wrap': {
    'borderRadius': '.3rem',
    'overflow': 'hidden'
  },
  'Cinephile top menu': {
    'display': 'flex',
    'padding': [{ 'unit': 'rem', 'value': 0.3 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.3 }, { 'unit': 'px', 'value': 0 }]
  },
  'Cinephile top menu item': {
    'flex': '1',
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center',
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'rem', 'value': 0.3 }],
    'flexDirection': 'column'
  },
  'Cinephile top menu item img': {
    'width': [{ 'unit': 'rem', 'value': 1 }]
  },
  'Cinephile tui-wrap': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'rem', 'value': 0.3 }, { 'unit': 'rem', 'value': 0.3 }, { 'unit': 'rem', 'value': 0.3 }, { 'unit': 'rem', 'value': 0.3 }],
    'background': '#fff',
    'marginBottom': [{ 'unit': 'rem', 'value': 0.4 }]
  },
  'Cinephile sm-title': {
    'lineHeight': [{ 'unit': 'rem', 'value': 1.4 }]
  },
  'Cinephile sm-title h5': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.4 }]
  },
  'Cinephile sm-title span': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.3 }],
    'color': '#999'
  },
  'Cinephile videos': {
    'display': 'flex',
    'flexWrap': 'wrap',
    'justifyContent': 'space-between'
  }
});
