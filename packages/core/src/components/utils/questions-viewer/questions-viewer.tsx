import { Component, Host, Prop, h } from '@stencil/core';
import '@material/web/chips/chip-set.js';
import '@material/web/chips/filter-chip.js'; // Import filter-chip component
import '@material/web/slider/slider.js'; // Import slider component
import '@material/web/textfield/filled-text-field.js'; // Import textfield component
import { MdChipSet } from '@material/web/chips/chip-set.js';
// Define TypeScript interfaces for better type safety
interface Question {
  id: string; // Unique identifier for each question
  text: string;
  type: string;
  options?: string[]; // For 'chips' type
  min?: number; // For 'slider' type
  max?: number; // For 'slider' type
  step?: number; // For 'slider' type
  value?: number; // For 'slider' type
  valueType?: string; // For 'textfield' type
}

@Component({
  tag: 'questions-viewer',
  styleUrl: 'questions-viewer.scss',
  shadow: true,
})
export class QuestionsViewer {
  @Prop() questions = [];
  chipset: MdChipSet;

  // Optional: Handle chip selection changes
  handleChipSelectionChange(event: Event, questionId: string) {
    const target: any = event.target;
    console.log(`Question ID: ${questionId}, Selected: ${target.selected}`);
    // Implement your logic here (e.g., update state, emit events)
  }

  // Optional: Handle slider value changes
  handleSliderChange(event: Event, questionId: string) {
    const target: any = event.target;
    console.log(`Question ID: ${questionId}, Slider Value: ${target.value}`);
    // Implement your logic here (e.g., update state, emit events)
  }

  componentDidLoad() {
    if (this.chipset) {
      this.chipset.addEventListener('click', event => {
        console.log('event', event);
        console.log(this.chipset.nodeValue);
      });
    }
  }

  // Render method
  render() {
    return (
      <Host>
        <form id="myForm" class="questions">
          {this.questions.map(question => (
            <div class="question-item" key={question.id}>
              <p>{question.text}</p>
              {this.renderQuestionByType(question)}
            </div>
          ))}
        </form>
      </Host>
    );
  }

  // Method to render question based on its type using switch-case
  renderQuestionByType(question: Question) {
    switch (question.type) {
      case 'chips':
        return (
          <md-chip-set
            name={question.id}
            ref={el => (this.chipset = el as MdChipSet)}
          >
            {question.options &&
              question.options.map(option => (
                <md-filter-chip label={option} key={option}></md-filter-chip>
              ))}
          </md-chip-set>
        );

      case 'slider':
        return (
          <md-slider
            style={{ width: '100%' }}
            min={question.min ?? 0}
            max={question.max ?? 100}
            step={question.step ?? 5}
            labeled={true}
            value={
              question.value ??
              ((question.min ?? 0) + (question.max ?? 100)) / 2
            }
            onMdcChange={event => this.handleSliderChange(event, question.id)}
          ></md-slider>
        );
      case 'textfield':
        return (
          <md-filled-text-field
            style={{ width: '100%' }}
            label={question.text}
            placeholder="I feel low in energy throughout the day..."
            type={question.valueType}
            rows={question.valueType === 'textarea' ? 5 : 1}
            onMdcChange={event => console.log(event.target.value)}
          ></md-filled-text-field>
        );

      // Add more cases here for different question types

      default:
        return <p>Unsupported question type: {question.type}</p>;
    }
  }
}
