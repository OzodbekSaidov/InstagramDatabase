import { writeFile, readFile} from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import { faker } from '@faker-js/faker'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const UserGenerate = async () => {
    const userfilepath = path.join(__dirname, "users.json");
    const data = [];

    for (let i = 0; i < 100; i++) {
        const user = {
            nickName : faker.person.fullName(), 
            uuid: faker.string.uuid(),
            ProfilePicture: faker.image.avatar(),
            email : faker.internet.email(),
            followers: faker.number.int(1000000),
            lastactive: faker.date.recent(),
            posts: {
                Image: faker.image.url(),
                description: faker.lorem.sentence(),
                date: faker.date.past(5),
                Comment: faker.lorem.sentence(10),
            }
        }       
        data.push(user);
    }    
    await writeFile(userfilepath, JSON.stringify(data));
}
UserGenerate();