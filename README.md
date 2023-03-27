## 1. Prisma
   + prisma.table_name.findMany() => Trả về tất cả dữ liệu có trong 1 table.
   + prisma.table_name.findMany({
      where: {
         column_name: {
         endsWith: 'string';
         }
      }
   });