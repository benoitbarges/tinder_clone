class CreateMessages < ActiveRecord::Migration[6.0]
  def change
    create_table :messages do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :match, null: false, foreign_key: true
      t.text :content

      t.timestamps
    end
  end
end
