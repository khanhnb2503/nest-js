## 1. Prisma
   + prisma.table_name.findMany() => Trả về tất cả dữ liệu có trong 1 table.
   + prisma.table_name.findMany({
      where: {
         column_name: {
         endsWith: 'string';
         }
      }
   });

   + includes: Lấy ra tất cả số bản ghi có trong 1 table.
   + VD: Table Products vs Table Categorys 
   + Muốn biết 1 Categorys có bao nhiêu Product thì select table Categorys.
   + prisma.categorys.findMany({
      includes: {
         product: true;
      }
   })

   + onDelete: Cascade
   author User @relation(fields: [authorId], references: [id], onDelete: Restrict, onUpdate: Restrict)
   Khi xóa 1 Users thì table có chứa bản ghi đó sẽ được đặt thành null

   + 1 ràng buộc duy nhất được hiểu là Unique
   + 1 định danh tổng hợp là @@id()
   + select: {column_name: true} -> Lọc và lấy ra record có column_name;
   + orderBy: {column_name: 'asc | desc}
   + some: 

## 2. Tạo nhanh 1 folder
   + mkdir -p src/folder_name


   https://user-cube.medium.com/authentication-in-nestjs-postgresql-and-jwt-a5cc5261afb8