import { $generateHtmlFromNodes } from '@lexical/html';
import Editor from './Editor';
import EditorComposer from './EditorComposer';
import ToolbarPlugin from './plugins/ToolbarPlugin/ToolbarPlugin';

import {
  AlignDropdown,
  BackgroundColorPicker,
  // BlockFormatDropdown,
  BoldButton,
  CodeFormatButton,
  // CodeLanguageDropdown,
  FloatingLinkEditor,
  FontFamilyDropdown,
  FontSizeDropdown,
  InsertDropdown,
  InsertLinkButton,
  ItalicButton,
  // RedoButton,
  TextColorPicker,
  TextFormatDropdown,
  // UndoButton,
  UnderlineButton,
} from './plugins/ToolbarPlugin/components';

import * as ToolbarTypes from './types';
import Divider from './ui/Divider';

export {
  EditorComposer,
  Editor,
  ToolbarPlugin,
  AlignDropdown,
  BackgroundColorPicker,
  BoldButton,
  CodeFormatButton,
  FloatingLinkEditor,
  FontFamilyDropdown,
  FontSizeDropdown,
  InsertDropdown,
  InsertLinkButton,
  ItalicButton,
  TextColorPicker,
  TextFormatDropdown,
  UnderlineButton,
  ToolbarTypes,
  Divider,
  $generateHtmlFromNodes,
};
