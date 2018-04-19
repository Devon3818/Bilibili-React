import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'DynamicCard': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'background': '#fff',
    'marginBottom': [{ 'unit': 'rem', 'value': 0.3 }],
    'padding': [{ 'unit': 'rem', 'value': 0.35 }, { 'unit': 'rem', 'value': 0.35 }, { 'unit': 'rem', 'value': 0.35 }, { 'unit': 'rem', 'value': 0.35 }]
  },
  'DynamicCard top': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 0.35 }]
  },
  'DynamicCard top img': {
    'width': [{ 'unit': 'rem', 'value': 1.2 }],
    'height': [{ 'unit': 'rem', 'value': 1.2 }],
    'borderRadius': '100%',
    'marginRight': [{ 'unit': 'rem', 'value': 0.35 }]
  },
  'DynamicCard top user-info': {
    'height': [{ 'unit': 'rem', 'value': 1.2 }],
    'overflow': 'hidden',
    'fontSize': [{ 'unit': 'rem', 'value': 0.3 }],
    'color': '#999'
  },
  'DynamicCard top user-info h5': {
    'color': '#000',
    'fontSize': [{ 'unit': 'rem', 'value': 0.45 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 0.1 }]
  },
  'DynamicCard top user-info h5 span': {
    'fontWeight': 'normal',
    'color': '#999'
  },
  'DynamicCard top more': {
    'color': '#999',
    'fontSize': [{ 'unit': 'rem', 'value': 0.55 }]
  },
  'DynamicCard video-info': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ececec' }]
  },
  'DynamicCard video-info video-wrap': {
    'width': [{ 'unit': 'rem', 'value': 4 }],
    'position': 'relative'
  },
  'DynamicCard video-info video-wrap video-img': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'rem', 'value': 2.5 }]
  },
  'DynamicCard video-info video-content': {
    'width': [{ 'unit': '%H', 'value': NaN }],
    'padding': [{ 'unit': 'rem', 'value': 0.35 }, { 'unit': 'rem', 'value': 0.35 }, { 'unit': 'rem', 'value': 0.35 }, { 'unit': 'rem', 'value': 0.35 }]
  },
  'DynamicCard video-info video-content h5': {
    'color': '#666',
    'fontWeight': 'normal',
    'fontSize': [{ 'unit': 'rem', 'value': 0.44 }],
    'height': [{ 'unit': 'rem', 'value': 1.3 }],
    'overflow': 'hidden',
    'textOverflow': 'ellipsis',
    'display': '-webkit-box',
    'WebkitLineClamp': '2',
    'WebkitBoxOrient': 'vertical',
    'marginBottom': [{ 'unit': 'rem', 'value': 0.045 }]
  },
  'DynamicCard video-info video-content p': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.3 }],
    'color': '#999'
  },
  'DynamicCard tags': {
    'display': 'flex',
    'paddingTop': [{ 'unit': 'rem', 'value': 0.4 }]
  },
  'DynamicCard tags p': {
    'flex': '1',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'fontSize': [{ 'unit': 'rem', 'value': 0.45 }],
    'color': '#999'
  },
  'DynamicCard tags p i': {
    'marginRight': [{ 'unit': 'rem', 'value': 0.1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.6 }]
  }
});
