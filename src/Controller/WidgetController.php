<?php

namespace App\Controller;

use App\Entity\Widget;
use App\Form\WidgetType;
use App\Repository\WidgetRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/widget')]
class WidgetController extends AbstractController
{
    #[Route('/', name: 'app_widget_index', methods: ['GET'])]
    public function index(WidgetRepository $widgetRepository): Response
    {
        return $this->render('widget/index.html.twig', [
            'widgets' => $widgetRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_widget_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $widget = new Widget();
        $form = $this->createForm(WidgetType::class, $widget);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($widget);
            $entityManager->flush();

            return $this->redirectToRoute('app_widget_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('widget/new.html.twig', [
            'widget' => $widget,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_widget_show', methods: ['GET'])]
    public function show(Widget $widget): Response
    {
        return $this->render('widget/show.html.twig', [
            'widget' => $widget,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_widget_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Widget $widget, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(WidgetType::class, $widget);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_widget_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('widget/edit.html.twig', [
            'widget' => $widget,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_widget_delete', methods: ['POST'])]
    public function delete(Request $request, Widget $widget, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$widget->getId(), $request->request->get('_token'))) {
            $entityManager->remove($widget);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_widget_index', [], Response::HTTP_SEE_OTHER);
    }
}
