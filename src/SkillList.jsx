import SkillListItem from "./SkillListItem";
import "./SkillList.css";

export default function SkillList({ skills }) {
  const skillListItems = skills.map((s, idx) => (
    <SkillListItem skill={s.name} level={s.level} key={idx} index={idx} />
  ));
  return <ul className="SkillList">{skillListItems}</ul>;
}
