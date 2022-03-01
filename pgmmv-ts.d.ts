import { Agtk, cc, jsb } from './api';

type window = { Agtk: Agtk; cc: cc; jsb: jsb; window: window } & Record<string, unknown>;

declare global {
  const Agtk: Agtk;
  const cc: cc;
  const jsb: jsb;
  const window: window;
}
