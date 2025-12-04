import { useEffect } from 'react';

export const LLM_SCROLL_HELPER_MUTATING_ID = 'LLMScrollHelperMutating';
export const LLM_SCROLL_HELPER_SCROLLING_ELEMENT_ID = 'LLMScrollHelperScrollingElement';
export const LLM_SCROLL_HELPER_HEADER_ID = 'LLMScrollHelperHeader';
export const LLM_SCROLL_HELPER_CHAT_ID = 'LLMScrollHelperChat';
export const LLM_SCROLL_HELPER_FOOTER_ID = 'LLMScrollHelperFooter';
const LLM_SCROLL_HELPER_UPPER_THRESHOLD_PX = 16;

export const useLLMScroll = () => {
  useEffect(() => {
    const mutatingElement = document.getElementById(LLM_SCROLL_HELPER_MUTATING_ID);

    const mutationObserver = new MutationObserver(handleMutations);

    mutationObserver.observe(mutatingElement!, {
      attributes: false,
      childList: false,
      characterData: true,
      subtree: true,
    });

    return () => mutationObserver.disconnect();
  }, []);
};

const handleMutations = (mutationList: MutationRecord[]) => {
  const userMessages = document.querySelectorAll('[data-author="user"]');
  const lastUserMessage = userMessages[userMessages.length - 1] as HTMLElement;

  if (!lastUserMessage) {
    return;
  }

  const headerHeight = (document.getElementById(LLM_SCROLL_HELPER_HEADER_ID) as HTMLElement)?.offsetHeight || 0;
  const chatElement = document.getElementById(LLM_SCROLL_HELPER_SCROLLING_ELEMENT_ID) as HTMLElement;
  const footerHeight = (document.getElementById(LLM_SCROLL_HELPER_FOOTER_ID) as HTMLElement)?.offsetHeight || 0;

  for (const mutation of mutationList) {
    if (mutation.type === 'characterData') {
      const lastUserMessageTop = lastUserMessage.offsetTop;

      const llmScrollHelper = document.getElementById(LLM_SCROLL_HELPER_CHAT_ID) as HTMLElement;
      const viewportHeight = chatElement.clientHeight;
      const paddingTop = parseInt(window.getComputedStyle(chatElement).paddingTop, 10);
      llmScrollHelper.style.minHeight =
        lastUserMessageTop +
        viewportHeight -
        headerHeight -
        footerHeight -
        2 * paddingTop -
        LLM_SCROLL_HELPER_UPPER_THRESHOLD_PX +
        'px';
      chatElement.scrollTop = lastUserMessageTop - headerHeight - LLM_SCROLL_HELPER_UPPER_THRESHOLD_PX;
    }
  }
};
