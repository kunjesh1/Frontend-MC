const sections = [
  {
    value: "html",
    title: "HTML",
    contents:
      "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
  },
  {
    value: "css",
    title: "CSS",
    contents:
      "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
  },
  {
    value: "javascript",
    title: "JavaScript",
    contents:
      "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
  },
];

class Accordian {
  constructor($rootEl, { sections }) {
    this.$rootEl = $rootEl;
    this.sections = sections;
  }

  init() {
    this.$rootEl.classList.add("accordion");
    const accordionSections = document.createDocumentFragment();
    this.sections.forEach((section) => {
      const $accordionSection = this.createAccordionSection(section);
      accordionSections.appendChild($accordionSection);
    });

    this.$rootEl.appendChild(accordionSections);
  }

  createAccordionSection({ value, title, contents }) {
    const accordionSection = document.createElement("div");
    accordionSection.classList.add("accordion-item");

    const accordionTitleBtn = document.createElement("button");
    accordionTitleBtn.classList.add("accordion-item-title");
    accordionTitleBtn.type = "button";
    accordionTitleBtn.setAttribute("data-value", value);

    const accordionIcon = document.createElement("span");
    accordionIcon.classList.add("accordion-icon");
    accordionIcon.setAttribute("aria-hidden", "true");

    accordionTitleBtn.append(title, accordionIcon);

    const accordionSectionContents = document.createElement("div");
    accordionSectionContents.classList.add("accordion-item-contents");
    accordionSectionContents.hidden = true;
    accordionSectionContents.textContent = contents;

    accordionSection.append(accordionTitleBtn, accordionSectionContents);

    return accordionSection;
  }

  attachEvents() {
    this.$rootEl.addEventListener("click", (event) => {
      const target = event.target;

      if (
        target.tagName !== "BUTTON" ||
        !target.classList.contains("accordion-item-title")
      ) {
        return;
      }

      //   const $icon = target.querySelector(".accordian-icon");
      //   $icon.classList.toggle("accordion-icon--expanded");

      console.log({ target });
      const $accordionContents = target.nextSibling;
      $accordionContents.hidden = !$accordionContents.hidden;
    });
  }
}

const onDomContentLoaded = (event) => {
  console.log({ event });

  const $accordianEl = document.getElementById("accordion");
  const accordian = new Accordian($accordianEl, { sections });
  console.log({ accordian });
  accordian.init();
  accordian.attachEvents();
};

document.addEventListener("DOMContentLoaded", onDomContentLoaded);
