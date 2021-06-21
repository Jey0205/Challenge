const { reverse } = require('dns');
const fs = require('fs');
const aData = () => JSON.parse(fs.readFileSync('todo.json', 'utf-8'));
const bData = (data) => fs.writeFileSync('todo.json', JSON.stringify(data, null, 3), 'utf-8');
const data = aData()
const command = process.argv;
const num = parseInt(command[3] - 1);


const tableList = () => console.log(`
>>> JS TODO <<<
$ node todo.js <command>
$ node todo.js list
$ node todo.js task <task id>
$ node todo.js add <task content>
$ node todo.js delete <task content>
$ node todo.js complete <task_id>
$ node todo.js list: outstanding asc| desc
$ node todo.js list: complete asc| desc
$ node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>
$ node todo.js filter: <tag_name>`
);

switch (command[2]) {
    case 'help':
        tableList();
        break;

    case 'add':
        const output = command.slice(3).join(' ');
        data.push(
            {
                task: output, completed: false,
                tag: []
            }

        )
        bData(data);
        console.log(`'${output}' telah ditambahkan.`);
        break;


    case 'delete':
        console.log(`'${data[num].task}' telah dihapus dari daftar`);
        data.splice(num, 1);
        bData(data);
        break;

    case 'complete':
        let completeTask = num
        console.log(`'${data[completeTask].task}' telah selesai`);
        data[completeTask].completed = true
        bData(data);
        break;


    case 'uncomplete':
        let uncompleteTask = num
        console.log(`'${data[uncompleteTask].task}' status selesai dibatalkan`)
        data[uncompleteTask].completed = false
        bData(data);
        break;


    case 'list':
        console.log('Daftar Pekerjaan');

        data.forEach((item, index) => {
            if (item.completed == false) {
                console.log(`${index + 1}. [ ] ${item.task}.`)
            } else if (item.completed == true) {
                console.log(`${index + 1}. [x] ${item.task}.`)
            }
        });

        break;

    case 'tag':
        data[num].tag = command.slice(4)
        console.log(`tag '${command.slice(4).join(' ')}' telah ditambahkan ke '${data[num].task}'`)
        bData(data);
        break;


    case 'list:outstanding':
        console.log('Daftar Pekerjaan');
        if (command[3] === 'asc') {
            for (let i = 0; i < data.length; i++) {
                if (data[i].completed === false)
                    console.log(`${i + 1}. [ ] ${data[i].task}.`)
            }
        } else if (command[3] === 'desc') {
            for (let j = data.length - 1; j >= 0; j--) {
                if (data[j].completed === false)
                    console.log(`${j + 1}. [ ] ${data[j].task}.`)
            }
        };

        break;


    case 'list:completed':
        console.log('Daftar Pekerjaan');
        if (command[3] === 'asc') {
            for (let i = 0; i < data.length; i++) {
                if (data[i].completed === true)
                    console.log(`${i + 1}. [x] ${data[i].task}.`)
            }
        } else if (command[3] === 'desc') {
            for (let j = data.length - 1; j >= 0; j--) {
                if (data[j].completed === true)
                    console.log(`${j + 1}. [x] ${data[j].task}.`)
            }
        };
        break;

    case command[2]:
        let jarak = command[2].split(':')
        let arr = []
        for (let i = 1; i < jarak.length; i++) {
            arr.push(jarak[i]);

        }
        let a = 0

        console.log('Daftar Pekerjaan');
        data.forEach((item, index) => {
            if (item.tag !== undefined) {
                for (let i = 0; i < item.tag.length; i++) {
                    for (let j = 0; j < arr.length; j++) {
                        if (item.tag[i] == arr[i]) {
                            if (item.completed == true) {
                                console.log(`${index + 1}. [x] ${item.task}.`)
                                a += 1
                            }else if(item.completed == false){
                                console.log(`${index + 1}. [ ] ${item.task}.`)
                                a += 1 
                            }
                        }

                    }

                }
            }
        });
        break;


    default:
        console.log("Coba lagi!!");
}
