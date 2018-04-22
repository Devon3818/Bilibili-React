import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'Login top': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'rem', 'value': 2.5 }],
    'position': 'relative',
    'overflow': 'hidden',
    'textAlign': 'center',
    'lineHeight': [{ 'unit': 'rem', 'value': 2.5 }]
  },
  'Login top i': {
    'fontSize': [{ 'unit': 'rem', 'value': 1 }],
    'color': '#999'
  },
  'Login top img': {
    'position': 'absolute',
    'height': [{ 'unit': 'rem', 'value': 4 }],
    'bottom': [{ 'unit': 'rem', 'value': -1.5 }]
  },
  'Login top kpan_l': {
    'left': [{ 'unit': 'rem', 'value': -0.1 }]
  },
  'Login top kpan_r': {
    'right': [{ 'unit': 'rem', 'value': -0.5 }]
  },
  'Login input-wrap': {
    'width': [{ 'unit': '%H', 'value': 0.9 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'string', 'value': 'auto' }],
    'paddingTop': [{ 'unit': 'px', 'value': 22 }]
  },
  'Login input-wrap input': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.4 }],
    'color': '#999',
    'transition': 'all .2s ease',
    'outline': 'none',
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'marginBottom': [{ 'unit': 'px', 'value': 16 }],
    'lineHeight': [{ 'unit': 'rem', 'value': 1.2 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.3 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.3 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eee' }]
  },
  'Login input-wrap input:focus': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#f25d8e' }]
  },
  'Login btn': {
    'width': [{ 'unit': '%H', 'value': 0.9 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'height': [{ 'unit': 'rem', 'value': 1.2 }],
    'lineHeight': [{ 'unit': 'rem', 'value': 1.2 }],
    'color': '#fff',
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'rem', 'value': 0.5 }],
    'borderRadius': '5rem',
    'background': '#00a1d6'
  }
});
