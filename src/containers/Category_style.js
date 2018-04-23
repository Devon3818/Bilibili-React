import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'Category': {
    'paddingBottom': [{ 'unit': 'rem', 'value': 3.5 }]
  },
  'Category top': {
    'padding': [{ 'unit': 'rem', 'value': 0.3 }, { 'unit': 'rem', 'value': 0.3 }, { 'unit': 'rem', 'value': 0.3 }, { 'unit': 'rem', 'value': 0.3 }],
    'background': '#fff',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(7, 17, 27, 0.1)' }],
    'marginBottom': [{ 'unit': 'rem', 'value': 0.5 }]
  },
  'Category top banner-wrap': {
    'borderRadius': '.3rem',
    'overflow': 'hidden'
  },
  'Category top menu': {
    'display': 'flex',
    'padding': [{ 'unit': 'rem', 'value': 0.3 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.3 }, { 'unit': 'px', 'value': 0 }]
  },
  'Category top menu item': {
    'flex': '1',
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center',
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'rem', 'value': 0.3 }],
    'flexDirection': 'column'
  },
  'Category top menu item img': {
    'width': [{ 'unit': 'rem', 'value': 0.8 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 0.2 }]
  },
  'Category item': {
    'width': [{ 'unit': '%H', 'value': 0.94 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'rem', 'value': 0.4 }, { 'unit': 'string', 'value': 'auto' }],
    'background': '#fff',
    'borderRadius': '.2rem',
    'fontSize': [{ 'unit': 'rem', 'value': 0.3 }]
  },
  'Category item ibanner': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'rem', 'value': 3 }],
    'backgroundPosition': 'center center',
    'backgroundSize': 'cover'
  },
  'Category item user-info': {
    'padding': [{ 'unit': 'rem', 'value': 0.2 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'rem', 'value': 0.2 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.4 }],
    'lineHeight': [{ 'unit': 'rem', 'value': 0.8 }]
  },
  'Category item user-info img': {
    'width': [{ 'unit': 'rem', 'value': 0.8 }],
    'height': [{ 'unit': 'rem', 'value': 0.8 }],
    'borderRadius': '100%',
    'marginRight': [{ 'unit': 'rem', 'value': 0.5 }]
  },
  'Category item h4': {
    'padding': [{ 'unit': 'rem', 'value': 0.2 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'rem', 'value': 0.2 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.5 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 0.2 }]
  },
  'Category item p': {
    'padding': [{ 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }],
    'lineHeight': [{ 'unit': 'rem', 'value': 0.6 }],
    'overflow': 'hidden',
    'textOverflow': 'ellipsis',
    'display': '-webkit-box',
    'WebkitLineClamp': '2',
    'WebkitBoxOrient': 'vertical',
    'height': [{ 'unit': 'rem', 'value': 1.5 }]
  },
  'Category item tags': {
    'padding': [{ 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }],
    'color': '#999'
  },
  'Category item tags fr': {
    'marginLeft': [{ 'unit': 'rem', 'value': 0.4 }]
  }
});
