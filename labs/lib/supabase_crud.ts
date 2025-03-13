import supabase from "./supabase";

const TABLE_NAME = "lab_user";

type LabUser = {
  id: number;
  name: string;
  class: string;
  grade: number;
}

const getUsers = async (): Promise<LabUser[]> => {
  const { data:users, error } = await supabase
    .from(TABLE_NAME)
    .select("*");
  if (error) throw error;
  return users;
};


export default getUsers;
export { LabUser };