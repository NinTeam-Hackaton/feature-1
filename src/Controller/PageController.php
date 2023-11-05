<?php

namespace App\Controller;

use App\Entity\Page;
use App\Form\PageType;
use App\Repository\PageRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

use App\Entity\Widget;

#[Route('/page')]
class PageController extends AbstractController
{
    #[Route('/', name: 'app_page_index', methods: ['GET'])]
    public function index(PageRepository $pageRepository): Response
    {
//        return $this->render('page/index.html.twig', [
        return $this->render('page/list.html.twig', [
            'pages' => $pageRepository->findAll(),
        ]);
    }

    #[Route('/json', name: 'app_page_index_json', methods: ['GET'])]
    public function indexJson(PageRepository $pageRepository): JsonResponse
    {
        return $this->json([
            'pages' => $pageRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_page_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $page = new Page();
        $form = $this->createForm(PageType::class, $page);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($page);
            $entityManager->flush();

            return $this->redirectToRoute('app_page_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('page/new.html.twig', [
            'page' => $page,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_page_show', methods: ['GET'])]
    public function show(Page $page, EntityManagerInterface $entityManager): Response
    {
        $pageContent = $page->getContent();

        $pattern = '/__WIDGET\d+__/';
        $matchResult = preg_match_all($pattern, $pageContent, $matches);
        if (is_int($matchResult) && $matchResult > 0) {
            $widgetRepository = $entityManager->getRepository(Widget::class);

            foreach ($matches[0] as $match) {
                $widgetPlaceholder = $match;
                $widgetMatchResult = preg_match('/__WIDGET(\d+)__/', $widgetPlaceholder, $widgetMatches);
                if (is_int($widgetMatchResult) && $widgetMatchResult > 0) {
                    $widgetId = $widgetMatches[1];
                    if ($widget = $widgetRepository->find($widgetId)) {
                        if ($widgetContent = $widget->getContent()) {
                            $pageContent = str_replace($widgetPlaceholder, $widgetContent, $pageContent);
                        }
                    }
                }
            }
        }

        return $this->render('page/show.html.twig', [
            'page' => $page,
            'page_content' => $pageContent,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_page_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Page $page, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(PageType::class, $page);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_page_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('page/edit.html.twig', [
            'page' => $page,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_page_delete', methods: ['POST'])]
    public function delete(Request $request, Page $page, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$page->getId(), $request->request->get('_token'))) {
            $entityManager->remove($page);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_page_index', [], Response::HTTP_SEE_OTHER);
    }
}
