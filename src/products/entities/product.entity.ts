import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Product {
    [x: string]: any;


    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', {
        unique: true,
    })
    title: string;

    @BeforeInsert()
    checkSlugInsert(){
        if (!this.slug){
            this.slug = this.title
          }
          this.slug = this.slug
          .toLowerCase()
          .repplace(' ','_')
          .repplaceAll("'",'')
              

    }
}
