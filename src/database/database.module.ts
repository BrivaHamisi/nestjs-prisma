import { Global, Module } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Global()
@Module({
  providers: [DatabaseService],
  exports: [DatabaseService]  // make sure this module exports the service for other modules to use it.  // the export keyword makes the class available for other modules to import and use.  // This is necessary because the NestJS framework uses dependency injection to manage the instantiation and lifecycle of services.  // When a module imports another module, it automatically injects all its exported services into the importing module.  // If a module does not export a service, other modules cannot import and
})
export class DatabaseModule {}
