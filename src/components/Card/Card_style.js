import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'Card': {
    'width': [{ 'unit': '%H', 'value': 0.48 }],
    'height': [{ 'unit': 'rem', 'value': 5 }],
    'background': '#fff',
    'borderRadius': '0.4rem',
    'marginBottom': [{ 'unit': 'rem', 'value': 0.4 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(7, 17, 27, 0.04)' }]
  },
  'Card img': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'Card card_info': {
    'padding': [{ 'unit': 'rem', 'value': 0.3 }, { 'unit': 'rem', 'value': 0.3 }, { 'unit': 'rem', 'value': 0.3 }, { 'unit': 'rem', 'value': 0.3 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.3 }]
  },
  'Card card_info card_title': {
    'overflow': 'hidden',
    'textOverflow': 'ellipsis',
    'display': '-webkit-box',
    'WebkitLineClamp': '2',
    'WebkitBoxOrient': 'vertical',
    'height': [{ 'unit': 'rem', 'value': 1 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 0.2 }]
  },
  'Card card_info card_tag': {
    'color': '#969696'
  }
});
