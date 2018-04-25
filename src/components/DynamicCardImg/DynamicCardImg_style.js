import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'DynamicCardImg': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'background': '#fff',
    'marginBottom': [{ 'unit': 'rem', 'value': 0.3 }],
    'padding': [{ 'unit': 'rem', 'value': 0.35 }, { 'unit': 'rem', 'value': 0.35 }, { 'unit': 'rem', 'value': 0.35 }, { 'unit': 'rem', 'value': 0.35 }]
  },
  'DynamicCardImg top': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 0.35 }]
  },
  'DynamicCardImg top img': {
    'width': [{ 'unit': 'rem', 'value': 1.2 }],
    'height': [{ 'unit': 'rem', 'value': 1.2 }],
    'borderRadius': '100%',
    'marginRight': [{ 'unit': 'rem', 'value': 0.35 }]
  },
  'DynamicCardImg top user-info': {
    'height': [{ 'unit': 'rem', 'value': 1.2 }],
    'overflow': 'hidden',
    'fontSize': [{ 'unit': 'rem', 'value': 0.3 }],
    'color': '#999'
  },
  'DynamicCardImg top user-info h5': {
    'color': '#000',
    'fontSize': [{ 'unit': 'rem', 'value': 0.45 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 0.1 }]
  },
  'DynamicCardImg top user-info h5 span': {
    'fontWeight': 'normal',
    'color': '#999'
  },
  'DynamicCardImg top more': {
    'color': '#999',
    'fontSize': [{ 'unit': 'rem', 'value': 0.55 }]
  },
  'DynamicCardImg imgs': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'display': 'flex',
    'justifyContent': 'space-between'
  },
  'DynamicCardImg imgs img': {
    'width': [{ 'unit': 'rem', 'value': 2.9 }],
    'height': [{ 'unit': 'rem', 'value': 2.9 }],
    'backgroundPosition': 'center center',
    'backgroundSize': 'cover'
  },
  'DynamicCardImg content': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.4 }],
    'padding': [{ 'unit': 'rem', 'value': 0.2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'px', 'value': 0 }],
    'color': '#666'
  },
  'DynamicCardImg tags': {
    'display': 'flex',
    'paddingTop': [{ 'unit': 'rem', 'value': 0.4 }]
  },
  'DynamicCardImg tags p': {
    'flex': '1',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'fontSize': [{ 'unit': 'rem', 'value': 0.45 }],
    'color': '#999'
  },
  'DynamicCardImg tags p i': {
    'marginRight': [{ 'unit': 'rem', 'value': 0.1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.6 }]
  }
});
