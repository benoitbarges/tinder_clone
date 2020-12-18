class AddColumnsToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :first_name, :string
    add_column :users, :gender, :string
    add_column :users, :description, :text
    add_column :users, :age, :integer
    add_column :users, :location, :string
    add_column :users, :latitude, :float
    add_column :users, :longitude, :float
  end
end
