import React, { useMemo } from 'react';
import { getLatestAssessmentResult } from '@/utils/assessmentStorage';
import { generateSkillGapProfile } from '@/features/skills/skillsTypes';
import { getPersonalizedLearning } from '@/features/learning/learningRecommendation';
import { LearningHeader } from '@/features/learning/components/LearningHeader';
import { LearningEmptyState } from '@/features/learning/components/LearningEmptyState';
import { RecommendedLearning } from '@/features/learning/components/RecommendedLearning';
import { LearningCatalog } from '@/features/learning/components/LearningCatalog';

export const Learning: React.FC = () => {
  const latestResult = getLatestAssessmentResult();

  const profile = useMemo(() => {
    if (!latestResult) return null;
    return generateSkillGapProfile(
      latestResult.domainScores,
      latestResult.overallScore,
      latestResult.completedAt
    );
  }, [latestResult]);

  const {
    hasAssessmentEvidence,
    recommendedModules,
    allModules,
    topPriorityReason,
  } = useMemo(() => getPersonalizedLearning(profile), [profile]);

  return (
    <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto">
      {/* Page Header */}
      <LearningHeader hasAssessmentEvidence={hasAssessmentEvidence} />

      {/* If No Assessment Evidence: Show prominent baseline prompt */}
      {!hasAssessmentEvidence && <LearningEmptyState />}

      {/* If Assessment Evidence Exists: Show Recommended Modules Section */}
      {hasAssessmentEvidence && (
        <RecommendedLearning
          recommendedModules={recommendedModules}
          topPriorityReason={topPriorityReason}
        />
      )}

      {/* Full Curriculum Catalog */}
      <LearningCatalog allModules={allModules} />
    </div>
  );
};

export default Learning;
