import { app } from "@/app";
import { prisma } from "./database/prisma";
import { env } from "./env";

(async ()=> { 
        
    const PORT =  env.PORT

    app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
    
})();
