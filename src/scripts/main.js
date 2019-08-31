import {  Karrot } from "@karrot/core";
import { FormAjax, FormValidation, ScrollTo, LazyLoad } from '@karrot/common';

import { App } from "./app";

Karrot.attach('my-form', FormAjax, FormValidation);
Karrot.attach('link', ScrollTo);
Karrot.attach('lazy', LazyLoad);
Karrot.attach('app', App);

const form = Karrot.get('my-form');

console.log(form);
