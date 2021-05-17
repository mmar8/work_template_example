/* eslint-disable camelcase, max-len */
/** Copyright (c) Blue Duck Education Ltd. (https://www.mangahigh.com), All rights reserved */
import React from 'react';
import PropTypes from 'prop-types';

class Template_5155 extends React.Component {
  static propTypes = {
    getProdigiDependency: PropTypes.func.isRequired,
    _: PropTypes.func.isRequired,
    submittedAnswer: PropTypes.any,
    questionId: PropTypes.string.isRequired,
    templateInputs: PropTypes.array.isRequired,
    locale: PropTypes.any.isRequired,
    templateChoices: PropTypes.array.isRequired,
  };

  static defaultProps = {
    submittedAnswer: '',
  };

  constructor(props) {
    super(props);

    this.state = {
      answer: props.submittedAnswer || '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const prevQuestionId = this.props.questionId;
    const nextQuestionId = nextProps.questionId;

    if (nextQuestionId !== prevQuestionId) {
      this.setState({ answer: '' });
    }
  }

  handleChange(value) {
    this.setState({ answer: value });
  }

  render() {
    const List = this.props.getProdigiDependency('prodigi-plugin-list');
    const ChoiceInput = this.props.getProdigiDependency('prodigi-plugin-choice-input');
    const TextBlock = this.props.getProdigiDependency('prodigi-plugin-text-block');
    const NumberFormat = this.props.getProdigiDependency('prodigi-plugin-number-format');
    const TemplateBody = this.props.getProdigiDependency('prodigi-plugin-template-body');
    const Question = this.props.getProdigiDependency('prodigi-plugin-question-block');
    const AssistBlock = this.props.getProdigiDependency('prodigi-plugin-assist-block');
    const {
      _, templateInputs, locale, templateChoices,
    } = this.props;
    const { answer } = this.state;
    const format = num => NumberFormat.format(num, locale);
    const [question, arrMonths] = templateInputs;
    const subs = {
      3: 3,
      4: 4,
      2: 2,
    };
    Object.keys(subs).forEach((key) => {
      subs[key] = Number.isNaN(subs[key]) ? subs[key] : format(subs[key]);
    });
    const translate = item => ({
      January: _('January'),
      February: _('February'),
      March: _('March'),
      April: _('April'),
      May: _('May'),
      June: _('June'),
      July: _('July'),
      August: _('August'),
      September: _('September'),
      October: _('October'),
      November: _('November'),
      December: _('December'),
    }[item]);
    return (
      <TemplateBody submittedAnswer={answer}>
        <Question>
          <TextBlock text={
                {
                  '3 months after February': _('Which <E>one</E> of the following months is [[3]] months after February?', subs),
                  '3 months after April': _('Which <E>one</E> of the following months is [[3]] months after April?', subs),
                  '2 months before August': _('Which <E>one</E> of the following months is [[2]] months before August?', subs),
                  '2 months before October': _('Which <E>one</E> of the following months is [[2]] months before October?', subs),
                  '3 months before December': _('Which <E>one</E> of the following months is [[3]] months before December?', subs),
                  '3 months before September': _('Which <E>one</E> of the following months is [[3]] months before September?', subs),
                }[question]
              }
          />
        </Question>

        <AssistBlock>
          <TextBlock text={
                  {
                    '3 months after February': _('Count on [[3]] months from February.', subs),
                    '3 months after April': _('Count on [[3]] months from April.', subs),
                    '2 months before August': _('Count back [[2]] months from August.', subs),
                    '2 months before October': _('Count back [[2]] months from October.', subs),
                    '3 months before December': _('Count back [[3]] months from December.', subs),
                    '3 months before September': _('Count back [[3]] months from September.', subs),
                  }[question]
                }
          />
          <List format="horizontal">{arrMonths.map(month => <List.Item>{translate(month)}</List.Item>)}</List>
          <AssistBlock.Solution>
            <TextBlock text={
                {
                  '3 months after February': _('The month after February is March. Next is April, then May.', subs),
                  '3 months after April': _('The month after April is May. Next is June, then July.', subs),
                  '2 months before August': _('The month before August is July. Next is June.', subs),
                  '2 months before October': _('The month before October is September. Next is August.', subs),
                  '3 months before December': _('The month before December is November. Next is October, then September.', subs),
                  '3 months before September': _('The month before September is August. Next is July, then June.', subs),
                }[question]
              }
            />
            <TextBlock text={
                {
                  '3 months after February': _('So, May comes [[3]] months after February.', subs),
                  '3 months after April': _('So, July comes [[3]] months after April.', subs),
                  '2 months before August': _('So, June comes [[2]] months before August.', subs),
                  '2 months before October': _('So, August comes [[2]] months before October.', subs),
                  '3 months before December': _('So, September comes [[3]] months before December.', subs),
                  '3 months before September': _('So, June comes [[3]] months before September.', subs),
                }[question]
              }
            />
          </AssistBlock.Solution>
        </AssistBlock>

        <ChoiceInput
          answerCount={1}
          choices={templateChoices.map((item, index) => ({
            original: item,
            displayString: translate(item),
            key: index,
          }))}
          value={answer}
          onChange={this.handleChange}
        />
      </TemplateBody>
    );
  }
}

export default Template_5155;
