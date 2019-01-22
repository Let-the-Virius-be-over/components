// @flow strict
import React from 'react';
import withStyle from "../../withStyle";

const SvgFasSdCard = props => <svg viewBox="0 0 384 512" {...props}><path d="M320 0H128L0 128v320c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zM160 160h-48V64h48v96zm80 0h-48V64h48v96zm80 0h-48V64h48v96z" /></svg>;

export const FasSdCard = withStyle(SvgFasSdCard, "FasSdCard", false);