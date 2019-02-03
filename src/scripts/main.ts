import {  Karrot } from "@karrot/core";

import { FormAjaxController, FormValidationController, ScrollToController } from '@karrot/common';

import { AppController } from "./controllers/app.controller";
import { Logger } from "./dependencies/logger";

Karrot({
	controllers: [AppController, FormValidationController, FormAjaxController, ScrollToController],
	depedencies: [Logger],
});
