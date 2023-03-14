import "./SkillListItem.css";

export default function SKillListItem({ skill, level, index }) {
  return (
    <li className="SkillListItem">
      <p>{skill}</p>
      <p className="level">Level:{level}</p>
    </li>
  );
}
