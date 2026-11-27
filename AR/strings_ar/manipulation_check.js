// strings/AR/manipulation_check.js
// Participant-facing text for the manipulation check questions.
//
// correct_indices and incorrect_indices are index arrays — do NOT translate or reorder.

const S_manip = {

  btn_continue: `متابعة`,

  abortion_preamble: `<b>في السيناريوهات التي قرأتها للتو، أيٌّ من الجوانب التالية اختلف بين الحالات؟</b><br><i>(اختر كل ما ينطبق)</i>`,

  abortion_options: [
    `ما إذا كانت المرأة تمتلك أطفالاً بالفعل أم لا`,
    `اسم المرأة وعمرها وملامح وجهها`,
    `ما إذا كان الحمل ينطوي على خطر صحي جسيم أو تشوهات جنينية`,
    `ما إذا كان الوضع المالي للمرأة قد وُصف`,
    `ما إذا كان الحمل نتيجة اغتصاب أو علاقة جنسية تمت بموافقة الطرفين`,
    `ما إذا كان لدى المرأة تاريخ سابق من الإجهاض أو الإجهاض التلقائي`
  ],

  violinist_preamble: `<b>في السيناريوهات التي تضمنت عازف الكمان، أيٌّ من الجوانب التالية اختلف بين الحالات؟</b><br><i>(اختر كل ما ينطبق)</i>`,

  violinist_options: [
    `ما إذا كان الشخص قد وافق مسبقاً على المساعدة أم تم ربطه دون موافقته`,
    `ما إذا كان عازف الكمان والشخص على صلة قرابة`,
    `اسم الشخص وعمره وملامح وجهه`,
    `ما إذا كان البقاء متصلاً يُشكّل خطراً صحياً جسيماً على الشخص`,
    `ما إذا كان عازف الكمان معروفاً بعزف الموسيقى الكلاسيكية أو الحديثة`,
    `ما إذا وُعد الشخص بتعويض مالي مقابل بقائه متصلاً`
  ],


  // Correct/incorrect indices — do NOT change (language-independent scoring)
  abortion_correct_indices:   [1, 2, 4],
  abortion_incorrect_indices: [0, 3, 5],

  violinist_correct_indices:   [0, 2, 3],
  violinist_incorrect_indices: [1, 4, 5]
};
