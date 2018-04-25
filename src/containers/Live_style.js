import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'Live': {
    'padding': [{ 'unit': 'rem', 'value': 0.3 }, { 'unit': 'rem', 'value': 0.3 }, { 'unit': 'rem', 'value': 0.3 }, { 'unit': 'rem', 'value': 0.3 }]
  },
  'Live banner-wrap': {
    'borderRadius': '.2rem',
    'overflow': 'hidden',
    'marginBottom': [{ 'unit': 'rem', 'value': 0.6 }]
  },
  'Live pink-user': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'rem', 'value': 3 }],
    'overflowX': 'scroll'
  },
  'Live pink-user ::-webkit-scrollbar': {
    'width': [{ 'unit': 'px', 'value': 0 }]
  },
  'Live pink-user wrap': {
    'width': [{ 'unit': 'rem', 'value': 24 }]
  },
  'Live pink-user item': {
    'float': 'left',
    'width': [{ 'unit': 'rem', 'value': 2.36 }],
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'rem', 'value': 0.35 }]
  },
  'Live pink-user item img': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#f25d8e' }],
    'width': [{ 'unit': 'rem', 'value': 1.4 }],
    'height': [{ 'unit': 'rem', 'value': 1.4 }],
    'borderRadius': '100%',
    'display': 'block',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'rem', 'value': 0.1 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'Live pink-user item p': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.1 }]
  },
  'Live pink-user item span': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.3 }],
    'color': '#999'
  },
  'Live live-wrap': {
    'paddingTop': [{ 'unit': 'rem', 'value': 0.4 }],
    'display': 'flex',
    'flexWrap': 'wrap',
    'justifyContent': 'space-between'
  }
});
