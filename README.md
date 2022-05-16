- Chỉ thực hiện lần đầu khi clone code về máy:
B1: Git clone https://github.com/lee-huydev/netflix-clone
B2: git checkout <branch name>
B3: git pull origin main
B4: npm install


- Thực hiện sau mỗi ngày code xong và push lên git:
B1: Git pull origin main
B2: Git add .
B3: Git commit -m '......'
<<<<<<< HEAD
B4: git push ogirin <branch name>
B5: heloo
B6: hahahah
=======
B4: git push ogirin <branch name> ( nhánh tên của mình không được push lên nhánh main nha!!! )
>>>>>>> f49431df69f8fcc68d52e98f28fc9f9a1e5076ae
