let array=[];
let choice=0;
do{
    choice=+prompt(`
        1.Thêm đối tượng Contact vào danh sách liên hệ.
        2.Hiển thị danh sách danh bạ.
        3.Tìm kiếm thông tin Contact theo số điện thoại.
        4.Cập nhật thông tin Contact(name, email, phone) theo id.
        5.Xóa một đối tượng Contact  khỏi danh sách danh bạ theo id.
        6.Thoát.`)
    switch(choice){
        case 1:
            addContact(array);
            break;
        case 2:
            printContact(array);
            break;
        case 3:
            searchContact(array);
            break;
        case 4:
            updateContact(array);
            break;
        case 5:
            deleteContact(array);
            break;
        case 6:
            console.log("Đã thoát chương trình");

    }
} while(choice != 6);
function addContact(array){
    let id = +prompt("Mời bạn nhập ID");
    do{
        if(!Number.isInteger(id) || (array.findIndex(item => item.id == id))!=-1){
            id=+prompt("ID sai mời bạn nhập lại");
        }
    } while(!Number.isInteger(id) || (array.findIndex(item => item.id == id))!=-1)
    let name = prompt("Mời bạn nhập tên");
    let email = prompt("Mời bạn nhập email");
    let phone = prompt("Mời bạn nhập số điện thoại");
    contact={
        id: id,
        name: name,
        email: email,
        phoneNumber: phone
    }
    array.push(contact);
    console.log("Thêm thành công");
}
function printContact(array){
    if(array.length==0){
        console.log("Danh bạ trong");
    } else{
        console.log("Danh bạ:");
        console.log(array);
    }
}
function searchContact(array){
    let find=prompt("Mời bạn nhập số điện thoại");
    let foundContact=array.filter(item => item.phoneNumber.includes(find));
    if(foundContact.length==0){
        console.log("Không tồn tại");
    } else{
        console.log(foundContact);
    }
}
function updateContact(array){
    let find=prompt("Nhập Id muốn sửa");
    let foundContact=array.findIndex(item => item.id == find);
    if(foundContact==-1){
        console.log("Không tồn tại");
    } else{
        console.log("Thông tin cũ");
        console.log(array[foundContact]);
        let id = +prompt("Nhập Id");
        do{
            if(!Number.isInteger(id) || (array.findIndex(item => item.id == id))!=-1){
                id=+prompt("ID sai mời bạn nhập lại");
            }
        } while(!Number.isInteger(id) || (array.findIndex(item => item.id == id))!=-1)
        let name = prompt("Mời bạn nhập tên");
        let email = prompt("Mời bạn nhập email");
        let phone = prompt("Mời bạn nhập số điện thoại");
        contact={
            id: id,
            name: name,
            email: email,
            phoneNumber: phone
        }
        array.splice(foundContact, 1, contact);
        console.log("Sửa danh bạ thành công");
    }
}
function deleteContact(array){
    let find=prompt("Nhập ID danh bạ mà bạn muốn xóa");
    let foundContact=array.findIndex(item => item.id == find);
    if(foundContact==-1){
        console.log("Không tồn tại danh bạ với ID này");
    } else{
        array.splice(foundContact, 1);
        console.log("Xóa danh bạ thành công");
    }
}