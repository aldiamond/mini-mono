import 'module-alias/register'

import {libAfunc} from "@monorepo-project/lib-a"
import {libBfunc} from "@monorepo-project/lib-b"

libAfunc('Test A')
libBfunc('Test B')
