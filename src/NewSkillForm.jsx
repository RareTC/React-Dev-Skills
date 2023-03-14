import "./NewSkillForm.css";

export default function NewSkillForm() {
  return (
    <form action="" className="NewSkillForm">
      <label htmlFor="">Skill</label>
      <input type="text" />
      <label htmlFor="">Level</label>
      <select name="" id="">
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
        <option value="">4</option>
        <option value="">5</option>
      </select>
      <button className="button">Add Skill</button>
    </form>
  );
}
