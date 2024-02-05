// @ts-ignore
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const ExperienceCard = ({ experience }: { experience: IExperience }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work w-full"
      contentStyle={{ background: '#10152D', color: '#fff'}}
      contentArrowStyle={{ borderRight: '7px solid  #10152D' }}
      date={<h5 className='exp-date'>{experience.date}</h5>}
      iconStyle={{ background: "#050816", color: '#fff' }}
      icon={
        <div className='flex-center h-full'>
          <img src={experience.icon} alt='icon'
            className='object-contain w-[60%] h-[60%]' />

        </div>
      }
    >
      <h3 className="f15-bold">{experience.title}</h3>
      <h4 className="exp-comp mb-2">{experience.company_name}</h4>
      <div className='flex flex-col gap-2'>
        {experience.points.map((v, ind) => (
          <div key={ind} className='flex items-start'>
            <img src='/assets/experiencesIcons/star.svg' className='object-contain w-4 h-4 mt-1'/>
            <h5 className='f12-regular mt-0 ml-2'>{v}</h5>
          </div>
        ))}
      </div>
    </VerticalTimelineElement>
  )
}

export default ExperienceCard