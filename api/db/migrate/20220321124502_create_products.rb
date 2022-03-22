class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.text :title
      t.string :image
      t.text :tech
      t.text :reason
      t.text :throughts
      t.string :loadmap
      t.integer :day
      t.text :commitment
      t.string :link
      t.string :github
      t.text :how

      t.timestamps
    end
  end
end
