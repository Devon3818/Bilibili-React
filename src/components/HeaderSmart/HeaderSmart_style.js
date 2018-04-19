import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'HeaderSmart': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'rem', 'value': 2 }],
    'overflow': 'hidden',
    'background': '#f25d8e',
    'position': 'relative',
    'display': 'flex',
    'alignItems': 'center',
    'textAlign': 'center'
  },
  'HeaderSmart title': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.55 }],
    'flex': '1',
    'color': '#fff',
    'fontWeight': '300'
  },
  'HeaderSmart left-cont': {
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'rem', 'value': 1.1 }],
    'overflow': 'hidden'
  },
  'HeaderSmart openMenu': {
    'position': 'absolute',
    'left': [{ 'unit': 'rem', 'value': -0.3 }],
    'top': [{ 'unit': 'rem', 'value': 0.2 }],
    'color': '#fff',
    'fontSize': [{ 'unit': 'rem', 'value': 0.7 }]
  },
  'HeaderSmart user-logo': {
    'width': [{ 'unit': 'rem', 'value': 1.1 }],
    'height': [{ 'unit': 'rem', 'value': 1.1 }],
    'borderRadius': '100%',
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }],
    'marginLeft': [{ 'unit': 'rem', 'value': 0.7 }]
  },
  'HeaderSmart icons': {
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 0 }],
    'display': 'flex',
    'justifyContent': 'flex-end',
    'marginRight': [{ 'unit': 'rem', 'value': 0.5 }]
  },
  'HeaderSmart icons i': {
    'color': '#fff',
    'fontSize': [{ 'unit': 'rem', 'value': 0.65 }],
    'marginLeft': [{ 'unit': 'rem', 'value': 0.5 }]
  },
  'hasShadow': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(7, 17, 27, 0.1)' }]
  }
});
